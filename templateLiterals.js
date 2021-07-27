const book = {
  name: "The Tempest",
  author: "Shakespeare",
  date: 1610
}
const bookTable =
      "<table border>"+
  "<tbody>"+
    "<tr>"+
      "<td>"+"Book"+"</td>"+
      "<td>"+book.name+"</td>"+
    "</tr>"+
  "<tr>"+
      "<td>"+"Author"+"</td>"+
      "<td>"+book.author+"</td>"+
    "</tr>"+
      "<tr>"+
      "<td>"+"Date"+"</td>"+
      "<td>"+book.date+"</td>"+
    "</tr>"+
 " </tbody>"+
  
"</table>"

const newBookTableWithTemplateLiterals = `
  <table border>
    <tbody>
      <tr>
        <td>Book</td>
        <td>${book.name}</td>
      </tr>
      <tr>
        <td>Author</td>
        <td>${book.author}</td>
      </tr>
       <tr>
        <td>Date</td>
        <td>${book.date}</td>
      </tr>
    </tbody>
  </table>  
`
      
document.body.innerHTML = newBookTableWithTemplateLiterals
