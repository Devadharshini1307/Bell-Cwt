<template>
    <v-container>
      <h1 style="margin-bottom: 30px;">Welcome -<span style="color: burlywood;">{{ email }}</span> </h1>
      <v-card >
        <v-card-title>
      <b>User Details</b>
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
     
      <v-data-table
        :headers="headers"
        :items="posts"
        :search="search"
        :items-per-page="5"
        :sort-by="sortBy"
        :sort-desc="sortDesc"
        class="custom-table"
      >
        <template v-slot:item="{ item, index }">
          <tr :style="{ backgroundColor: index % 2 == 0 ? 'white' : '#ffcdcd' }">
            <td>{{ item.userId }}</td>
            <td>{{ item.id }}</td>
            <td>{{ item.title }}</td>
            <td>{{ item.body }}</td>
          </tr>
        </template>
      </v-data-table>
    </v-card>
   
    </v-container>

  </template>
  
  <script>
  import axios from 'axios'
  export default {
  
    data() {
      return {
        email: '',
        posts: [],
        search: '',
        sortBy: 'title',
        sortDesc: false,
        headers: [
          { text: 'User ID', value: 'userId' },
          { text: 'Post ID', value: 'id' },
          { text: 'Title', value: 'title' },
          { text: 'Body', value: 'body' },
        ],
      };
    },
    created() {
      axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
          this.posts = response.data;
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
        debugger
       
    },
    mounted(){
        this.email=this.$store.getters.getEmail;
    }
  };
  </script>
  
  <style scoped>
  .custom-table .v-data-table-header th {
    background-color: #007bff; /* Primary color */
    color: white;
    font-weight: bold;
  }
  
  .custom-table .v-data-table-header th,
  .custom-table .v-data-table__wrapper td {
    padding: 16px;
    text-align: left;
  }
  
  .custom-table .v-data-table__wrapper td {
    border-bottom: 1px solid #ddd;
  }
  
  .custom-table .v-data-table__wrapper tr:hover {
    background-color: #f1f1f1; /* Hover effect */
  }
  
  .search-field {
    margin-top: 16px;
    margin-bottom: 16px;
  }
  </style>
  