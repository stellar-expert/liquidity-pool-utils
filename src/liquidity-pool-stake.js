import {fromStroops} from '@stellar-expert/formatter'
/**
 * Estimate amounts of liquidity pool tokens based on the share of the pool
 * @param {Number|String} shares - Amount of pool shares that belong to the account
 * @param {Array<String|Number>} reserves - Total amount of tokens deposited to the pool
 * @param {Number|String} totalShares - Total pool shares
 * @return {String[]}
 */
export function estimateLiquidityPoolStakeValue(shares, reserves, totalShares) {
    if (!(shares > 0) || !(totalShares > 0))
        return null
    return reserves.map(reserve => {
        const value = BigInt(shares) * BigInt(reserve) * 10000000n / BigInt(totalShares)
        return fromStroops(value)
    })
}