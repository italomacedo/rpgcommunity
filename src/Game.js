import MapTypes from './MapTypes';
import RPGCommunitySideRotationUtils from './utils/RPGCommunitySideRotationUtils';
import {createToken} from './TokenFactory';
import {TokenTypes} from './TokenTypes';

export const boardSize = 8;
export let currentState = [{position: [0,0], side: "up", tokenType: TokenTypes.HUMAN_MALE_WHITE},{position: [0,3], side: "up", tokenType: TokenTypes.HUMAN_MALE_RED}];
export let observers = []
export let lastToken;

export let map =
    [
        MapTypes.WALL_TREE, MapTypes.WALL_TREE, MapTypes.WALL_TREE, MapTypes.WALL_TREE, MapTypes.WALL_TREE, MapTypes.WALL_TREE, MapTypes.WALL_TREE, MapTypes.WALL_TREE,
        MapTypes.FLOOR_GRASS, MapTypes.FLOOR_GRASS, MapTypes.FLOOR_GRASS, MapTypes.FLOOR_GRASS, MapTypes.FLOOR_GRASS, MapTypes.WALL_TREE, MapTypes.WALL_TREE, MapTypes.WALL_TREE,
        MapTypes.FLOOR_SAND, MapTypes.FLOOR_SAND, MapTypes.FLOOR_SAND, MapTypes.FLOOR_SAND, MapTypes.FLOOR_SAND, MapTypes.WALL_TREE, MapTypes.WALL_TREE, MapTypes.WALL_TREE,
        MapTypes.FLOOR_STONE, MapTypes.FLOOR_STONE, MapTypes.FLOOR_STONE, MapTypes.FLOOR_STONE, MapTypes.FLOOR_STONE, MapTypes.WALL_TREE, MapTypes.WALL_TREE, MapTypes.WALL_TREE,
        MapTypes.FLOOR_STONE, MapTypes.FLOOR_STONE, MapTypes.FLOOR_STONE, MapTypes.FLOOR_STONE, MapTypes.FLOOR_STONE, MapTypes.WALL_TREE, MapTypes.WALL_TREE, MapTypes.WALL_TREE,
        MapTypes.FLOOR_STONE, MapTypes.FLOOR_STONE, MapTypes.FLOOR_STONE, MapTypes.FLOOR_STONE, MapTypes.FLOOR_STONE, MapTypes.WALL_TREE, MapTypes.WALL_TREE, MapTypes.WALL_TREE,
        MapTypes.FLOOR_SAND, MapTypes.FLOOR_SAND, MapTypes.FLOOR_SAND, MapTypes.FLOOR_SAND, MapTypes.FLOOR_SAND, MapTypes.WALL_TREE, MapTypes.WALL_TREE, MapTypes.WALL_TREE,
        MapTypes.FLOOR_GRASS, MapTypes.FLOOR_GRASS, MapTypes.FLOOR_GRASS, MapTypes.FLOOR_GRASS, MapTypes.FLOOR_GRASS, MapTypes.WALL_TREE, MapTypes.WALL_TREE, MapTypes.WALL_TREE,
        MapTypes.WALL_TREE, MapTypes.WALL_TREE, MapTypes.WALL_TREE, MapTypes.WALL_TREE, MapTypes.WALL_TREE, MapTypes.WALL_TREE, MapTypes.WALL_TREE, MapTypes.WALL_TREE,
    ]

export function addToken(element) {
    if (!existsToken(element)) {
        currentState.push(element);
    }
}

export function existsToken(element) {
    for (var i = 0; i < currentState.length; i++) {
        if (currentState[i].position === element.position) return true;
    }

    return false;
}

export function getToken(x, y) {
    for (var i = 0; i < currentState.length; i++) {
        if (currentState[i].position[0] === x && currentState[i].position[1] === y) {
            return currentState[i]
        }
    }
}

function emitChange() {
    observers.forEach((o) => o && o(currentState))
}

export function observe(o) {
    observers.push(o)
    emitChange()
    return () => {
        observers = observers.filter((t) => t !== o)
    }
}

export function canMove(element, toX, toY) {
    if(element && element.props && element.props.position) {
        lastToken = element;
    }

    let [x, y] = [0,0]
    if(lastToken) [x,y] = lastToken.props.position;

    const dx = toX - x
    const dy = toY - y

    return (
        (Math.abs(dx) === 1 && Math.abs(dy) === 0) ||
        (Math.abs(dx) === 0 && Math.abs(dy) === 1) ||
        (Math.abs(dx) === 1 && Math.abs(dy) === 1)
    )
}

export function move(toX, toY) {
    if(!lastToken) return;

    let newState = [];
    let [x, y] = lastToken.props.position;

    for(var i = 0; i < currentState.length; i++) {
        if(currentState[i].position[0] !== x || currentState[i].position[1] !== y) newState.push(currentState[i]);
    }
    
    const dx = toX - x
    const dy = toY - y

    let element = getToken(x, y);

    if(element) element.side = RPGCommunitySideRotationUtils.coordinatesToSide(dx, dy);
    if(element) element.position = [toX, toY]

    newState.push(element);

    currentState = newState;

    emitChange()
}
