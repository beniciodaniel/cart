## 💻 Technical Challenge (Mercos)
### ReactJS | Typescript | Styled-Components | Context API | Unform | Yup
This repository was created and its code developed to be presented to the company Mercos. The delivery of this technical challenge is part of the selection process to apply for the position of frontend developer in the company.

## Requirements

- Use API offered by the company to show the items in the cart
- Use API offered by the company to understand which discount rules should be applied
- The user can change the quantity of an item
- User can remove an item from the cart
- The user can write a note for each item
- Make the applied discount be calculated in real time, as well as the final value
- If multiple rules fit the discount, apply only the highest discount rule
- Implement the final screen requesting address and card number for payment
- Validate the fields

## API

**GET** https://5f2c373bffc88500167b8cce.mockapi.io/carrinho
- This endpoint returns all items that need to be shown on the screen.

**GET** https://5f2c373bffc88500167b8cce.mockapi.io/politicas-comerciais
- This endpoint returns some discount rules for the order. It is necessary to interpret the rules to show the total value and whether it has a discount or not. There are currently two possible policies: *valor_minimo* and *quantidade_itens_minima*.

**POST** https://5f2c373bffc88500167b8cce.mockapi.io/carrinho
- This POST should be performed at the end, after the user fill in the card number and address. The format:
```
  {
    "itens": {
      "id": 1,
      "quantidade": 2,
      "observacao": "Por favor, retire a gordura da carne",
    },
    "endereco": {
      "rua": "Rua José",
      "numero": 1225,
      "bairro": "Centro",
    },
    "cartao": {
      "numero": "1234 1234 1234 1234",
      "cvc": "667",
    },
  }
```


