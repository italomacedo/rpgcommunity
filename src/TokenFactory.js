import React from 'react';
import TokenView from './TokenView';
import { TokenTypes } from './TokenTypes';

export function createToken(position, side, tokenType) {
    switch (tokenType) {
        case TokenTypes.HUMAN_MALE_WHITE:
            return <TokenView position={position} side={side} tokenImage={"./resources/" + TokenTypes.HUMAN_MALE_WHITE + ".png"} type={tokenType} />
        case TokenTypes.HUMAN_MALE_RED:
            return <TokenView position={position} side={side} tokenImage={"./resources/" + TokenTypes.HUMAN_MALE_RED + ".png"} type={tokenType} />
    }
}