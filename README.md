## 💻 Technical Challenge (Mercos) by Benício Daniel Hasegawa
### ReactJS | Typescript | Styled-Components | Axios | Context API | Unform | Yup
This repository was created and its code developed to be presented to the company Mercos. The delivery of this technical challenge is part of the selection process to apply for the position of frontend developer in the company.

It was decided to use the Typescript template with the create-react-app thinking about the benefits that this would bring to the development of the code.

The first action before starting the project itself was to configure Eslint with the AirBNB style-guide and Prettier. I consider using them as a necessary asset to contribute to code and readability standards.

After the initial configurations with Eslint and Prettier, I cleaned up some standard files from the create-react-app and started developing the layout based on the mockup provided by the company.

So the next step was to connect the application to the API provided by the company to obtain both products and discount policies.

The discount rules were two: 10% discount for a minimum amount of R $ 200 and 20% discount if the quantity of items was at least 50. And if both rules could be applied, only the one with the greatest discount would apply. The required details are in the Requirements section.

To work with the form (data submission and validation) Unform and Yup were used.

In order to use the data globally by the application, the context for the cart was created: CartContext. Within it, the logic involving increasing and decreasing the quantity of items, discount rules, among others, were concentrated.

And to facilitate the use of context information, the custom useCart hook was created. By importing it into any component, it would be enough to use it to obtain the desired states or functions. For example:
```
  const { products } = useCart();
```

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


