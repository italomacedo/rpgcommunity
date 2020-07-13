import Hero from './Hero';
import RPGCommunitySideRotationUtils from './utils/RPGCommunitySideRotationUtils';

export let knightPosition = [0, 4]
export let knightSide = "up"
export let observers = []

function emitChange() {
    observers.forEach((o) => o && o(knightPosition))
}

export function observe(o) {
    observers.push(o)
    emitChange()
    return () => {
        observers = observers.filter((t) => t !== o)
    }
}

export function canMove(toX, toY) {
    const [x, y] = knightPosition
    const dx = toX - x
    const dy = toY - y
    return (
        (Math.abs(dx) === 1 && Math.abs(dy) === 0) ||
        (Math.abs(dx) === 0 && Math.abs(dy) === 1) ||
        (Math.abs(dx) === 1 && Math.abs(dy) === 1)
    )
}

export function move(element, toX, toY) {
    const [x, y] = knightPosition
    const dx = toX - x
    const dy = toY - y
    
    knightSide = RPGCommunitySideRotationUtils.coordinatesToSide(dx, dy);
    knightPosition = [toX, toY]
    emitChange()
}
