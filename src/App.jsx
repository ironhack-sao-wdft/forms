import { useState } from "react";

function App() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  console.log(`Valor atualizado do estado:`, form);

  function handleChange(e) {
    console.log("Estou atualizando o campo:", e.target.name);
    console.log("Novo valor do campo:", e.target.value);
    console.log("State atual:", form);

    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="input-name">Nome:</label>
      <input
        id="input-name"
        name="name"
        value={form.name}
        onChange={handleChange}
      />

      <label htmlFor="input-email">Email:</label>
      <input
        id="input-email"
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
      />

      <label htmlFor="input-password">Senha:</label>
      <input
        id="input-password"
        type="password"
        name="password"
        value={form.password}
        onChange={handleChange}
      />

      <button>Cadastrar</button>
    </form>
  );
}

export default App;
