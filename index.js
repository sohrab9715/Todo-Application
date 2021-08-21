show_data();
let input_data=document.getElementById("input_text");
let inputbtn=document.getElementById("input_btn");
inputbtn.addEventListener("click",function()
{

    var get_input_value= input_data.value;
    if(get_input_value.trim()!=0)
    {
        let chek_data=localStorage.getItem("local_data");
        if(chek_data==null)
        {
            data_obj=[];
        }
        else
        {
            data_obj=JSON.parse(chek_data)
        }
        data_obj.push(get_input_value);
        localStorage.setItem("local_data", JSON.stringify(data_obj));
    }
    
      show_data();
});

function show_data()
{
    let chek_data=localStorage.getItem("local_data");
    if(chek_data==null)
    {
        data_obj=[];
    }
    else
    {
        data_obj=JSON.parse(chek_data)
    }
    let html_page=''; 
    let get_table=document.getElementById("data_table");

    data_obj.forEach((item,index)=> {
        
        html_page += 
        `<tr>
            <td>${index+1}</td>
            <td>${item}</td>
         </tr>` ;
    });
    get_table.innerHTML=html_page;
}