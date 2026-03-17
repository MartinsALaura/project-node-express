export const getHello = (req, res) => {
  res.json({ message: 'Hello from the API!' });
};

export const getUser = (req, res) => {
  const { id } = req.params;
  res.json({ userId: id, name: 'John Doe', email: 'john@example.com' });
};
