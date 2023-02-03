export default function ShoppingButton() {
    const handleShopping = () => {
        console.log("Du har shoppet")
    }

    return <button onClick={handleShopping}>Legg i handlekurv</button>
}