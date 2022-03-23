<template>
  <div class="about">
    <h1>Contato</h1>
  </div>
  <div>
    <form class="form">
      <label for="">Nome</label>
      <input type="text" name="name" placeholder="Nome completo" />
      <label for="">E-mail</label>
      <input type="email" name="email" placeholder="Email para contato" />
      <label for="">Telefone</label>
      <input
        type="number"
        name="telefone"
        placeholder="Telefone para contato"
      />
      <label for="">Campo da Mensagem</label>
      <textarea name="" id="" cols="30" rows="10"></textarea>

      <button type="submit">Enviar</button>
    </form>
  </div>
</template>
<style>
.form {
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  width: 30%;
}
.form input {
  margin-top: 8px;
  margin-bottom: 15px;
  border-radius: 5px;
  border: 0 none;
}
.form button {
  margin-top: 20px;
  background: rgb(105, 214, 105);
}
.form button:hover {
  background: rgb(9, 92, 9);
  color: white;
}
</style>

<script>
export default {};
</script>
