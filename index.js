function distanceFromHqInBlocks (blockNumber) {
    if (blockNumber > 42) {
    return blockNumber - 42;
    } else {
    return 42 - blockNumber;
    }
    }

function distanceFromHqInFeet(blockNumber) {
return distanceFromHqInBlocks(blockNumber) * 264
}

function distanceTravelledInFeet(start, stop) {
    return Math.abs(start - stop) * 264
}

function calculatesFarePrice(start, stop) {
    const distance = distanceTravelledInFeet(start, stop)
    if (distance < 400) {
        return 0
    }
    else if (distance < 2000) {
        return (distance - 400) * .02
    }
    else if (distance > 2000 && distance < 2500) {
        return 25
    }
    else {
        return 'cannot travel that far'
    }
}