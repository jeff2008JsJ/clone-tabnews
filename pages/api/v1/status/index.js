function status(request, response) {
  response.status(200).json({ chave: "123" });
}

export default status;
