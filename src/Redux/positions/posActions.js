// один экшон добавляющий все позиции
export const ADD_POSITIONS = "ADD_POSITIONS";


export const addPositions = (positions) => ({
    type: ADD_POSITIONS,
    positions,
    // payload: positions
})