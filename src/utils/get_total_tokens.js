
export default function get_total_tokens(bonusData, token_price){
    var totalAmount;

    totalAmount = 0;
    {bonusData.map(data => 
        totalAmount += parseFloat((data.Amount * (parseFloat(token_price) * data.Percentage + parseFloat(token_price))).toFixed(2))
    )}
    return (totalAmount);
}