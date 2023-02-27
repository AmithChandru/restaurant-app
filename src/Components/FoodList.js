import { useContext, useState } from "react"
import cartContext from "./cartContext";

const FoodList = (props) => {

  const items = [
    {
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: '22.99',
      id: '1'
    },
    {
      name: 'Schnitzel',
      description: 'A German speciality!',
      price: '16.50',
      id: '2'
    },
    {
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: '12.99',
      id: '3'
    },
    {
      name: 'Green Bowl',
      description: 'Healthy... and green...',
      price: '22.99',
      id: '4'
    },
  ]

  const [quantity, setQuantity] = useState(0);
  const cartCtx = useContext(cartContext);

  const handleAdd = (id) => {
    let item = items.filter((ele) => {
      return ele.id === id;
    })
    cartCtx.addAmount(id, quantity);
    cartCtx.addItem(item);
  }

  return (
    <div className='foodList'>
      {items.map((item) => {
        return (
          <div style={{ flexDirection: 'row', display: 'flex', justifyContent: 'space-between' }}>
            <ul style={{ listStyleType: 'none' }}>
              <li style={{ fontWeight: 'bold' }}>{item.name}</li>
              <li style={{ fontStyle: 'italic' }}>{item.description}</li>
              <li style={{ color: 'red', fontWeight: 'bolder' }}>{item.price}</li>
            </ul>
            <form style={{ flexDirection: 'column', display: 'flex', alignItems: 'center' }}>
              <div style={{ marginBottom: '10px' }}>
                <label style={{ fontWeight: 'bold' }}>Amount</label>
                <input type='number' style={{ width: '40px', marginLeft: '20px' }} onChange={(e) => setQuantity(e.target.value)} />
              </div>
              <input onClick={() => handleAdd(item.id)} type='button' value='+Add' style={{ backgroundColor: '#80471c', color: 'white', borderRadius: '20px', width: '80%', cursor: 'pointer' }} />
            </form>
          </div>
        )
      })}
    </div>
  )
}

export default FoodList;