It appears that you're using the `key` prop within your code to assign unique keys to elements rendered in a list, and you're doing this correctly. However, I notice that you have two separate `map` functions, one for `cardsData` and another for `ordersData`, each with its own `index` variable. The problem might be related to these `index` variables overlapping, causing React to issue the warning.

To ensure that the `key` props are truly unique, you should use separate index variables for each `map` function, as React expects unique keys across the entire component tree. You can modify your code like this:

```jsx
<div className={css.cards}>
  {cardsData.map((card, cardIndex) => (
    <div className={css.card} key={cardIndex}>
      <div className={css.cardHead}>
        <span>{card.title}</span>
        <span>+{card.change}</span>
      </div>
    </div>
  ))}
</div>

<div className={css.orders}>
  {ordersData.map((order, orderIndex) => (
    <div key={orderIndex} className={css.order}>
      <div>
        <span>{order.name}</span>
        <span>$ {order.change}</span>
      </div>
      <div>
        <span>{order.type}</span>
        <span>Items: {order.items}</span>
      </div>
    </div>
  ))}
</div>
```

By using separate index variables (`cardIndex` and `orderIndex`) for each `map` function, you should avoid any key conflicts and resolve the "Each child in a list should have a unique 'key' prop" warning.