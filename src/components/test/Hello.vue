<template>
  <div class="hello">
   
  </div>
</template>

<script>
export default {
  name: "hello",
  data() {
    return {
      firstInputOption: ["Africa", "Europe"],
      form: {},
      Africa: ["Tunisia", "Algeria", "Marooc"],
      europe: "",
      Europe: ["Itali", "France", "Espagne"],
      msg: "Welcome to Your Vue.js PWA"
    };
  },
  methods: {
    secondInputOptions() {
      return this.form.continent === "Africa" ? this.Africa : this.Europe;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #35495e;
}

.j{
  position:absolute;
  top:300px
}
</style>
