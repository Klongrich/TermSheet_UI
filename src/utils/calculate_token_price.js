
export default function get_token_price({supply, ethLiq, hardcap}) {
    return (
        (parseFloat(parseFloat(supply) * (ethLiq / 100)) / (parseFloat(hardcap) * 0.5)).toFixed(2)
    )
}