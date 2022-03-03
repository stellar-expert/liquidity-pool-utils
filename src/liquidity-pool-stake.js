import Bignumber from 'bignumber.js'
import {stripTrailingZeros} from '@stellar-expert/formatter'

/**
 * Estimate amounts of liquidity pool tokens based on the share of the pool
 * @param {Number|String|Bignumber} shares - Amount of pool shares that belong to the account
 * @param {Array<String|Number|Bignumber>} reserves - Total amount of tokens deposited to the pool
 * @param {Number|String|Bignumber} totalShares - Total pool shares
 * @return {Array<String>}
 */
export function estimateLiquidityPoolStakeValue(shares, reserves, totalShares) {
    if (!(shares > 0) || !(totalShares > 0)) return null
    return reserves.map(reserve => {
        const amount = new Bignumber(shares)
            .mul(new Bignumber(reserve))
            .div(totalShares)
            .toFixed(7, Bignumber.ROUND_DOWN)
        return stripTrailingZeros(amount)
    })
}