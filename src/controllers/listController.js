let list = [
  { id: 1, title: 'Book' },
  { id: 2, title: 'Pencil' },
  { id: 3, title: 'Box' }
];

export const getList = (req, res) => {
  res.json(list);
};

export const createListItem = (req, res) => {
  const { item } = req.body;
  if (!item) {
    return res.status(400).json({ error: 'Item is required, please attach an item in the request body' });
  }
  
  const newItem = {
    id: nextId++,
    title
  };

  list.push(newItem);
  res.status(201).json(newItem);
};

export const deleteListItem = (req, res) => {
  const { id } = req.params;
  const index = list.findIndex(item => item.id === parseInt(id));
  
  if (index === -1) {
    return res.status(404).json({ error: 'Item not found' });
  }

  const deletedItem = list.splice(index, 1);
  res.json(deletedItem[0]);
}