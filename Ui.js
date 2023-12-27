let form = document.querySelector("form")

let ui = [];

form.addEventListener("submit", data)
    function data(event){
        event.preventDefault()

        let name = document.querySelector("#name").value;

        let ID = document.querySelector("#id").value;
        
        let subject = document.querySelector("#subject").value;
        
        let qualification = document.querySelector("#qualification").value
        
        let btn = document.querySelector("#btn").value

        let object = {
            DName : name,
            Did : ID,
            Dsubject : subject,
            Dquali : qualification,
            Dbtn : btn
        }

        ui.push(object)
        console.log(ui);
        Display(ui)

        document.querySelector("form").reset();
    }
      function  Display(ui){
        document.querySelector("tbody").innerHTML = "";
        ui.forEach(function (object) {

            let tr = document.createElement("tr")

            let name = document.createElement("td")
            name.innerText = object.DName

            let id = document.createElement("td")
            id.innerText = object.Did

            let subject = document.createElement("td")
            subject.innerText = object.Dsubject

            let quali = document.createElement("td")
            quali.innerText = object.Dquali

            let Delete = document.createElement("td")
            Delete.innerText = "delete"

            Delete.addEventListener("click", function(event){
                event.target.parentNode.remove()


            })

            tr.append(name, id, subject, quali, Delete,);
            document.querySelector("tbody").append(tr); 

            name.onmouseover = function(){
                name.style.fontSize = "1.4rem"

            }
            name.onmouseleave = function(){
                name.style.fontSize = "1rem"
                
            }
        });
      }

