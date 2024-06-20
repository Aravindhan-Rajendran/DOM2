let arr = [];
            function addusers() {
                let u_name = document.getElementById("name").value;
                let u_prof = document.getElementById("Profession").value;
                let u_age = document.getElementById("age").value;
                if (u_name === '' || u_prof === '' || u_age === '') {
                    document.getElementById("error").style.display = 'block';
                    document.getElementById("Success").style.display = 'none';
                }
                else {
                    document.getElementById("box").innerHTML='';
                    document.getElementById("error").style.display = 'none';
                    document.getElementById("Success").style.display = 'block';
                    document.getElementById("datanotfound").style.display = 'none';
                    document.getElementById("box").style.display = 'flex';
                    document.getElementById("del").style.display = 'inline';
                    let obj = { u_name: u_name, u_prof: u_prof, u_age: u_age };
                    arr.push(obj);
                    for (let i = 0; i < arr.length; i++) {
                        let employee = document.createElement('div');
                        employee.innerHTML = `<span style="padding-left:50px;padding-right:90px">${arr[i].u_name}</span><span style="padding-left:30px;padding-right:90px;">${arr[i].u_prof}</span><span style="padding-left:30px">${arr[i].u_age}</span>`;
                        document.getElementById("box").appendChild(employee);
                        document.getElementById("name").value = '';
                        document.getElementById("Profession").value = '';
                        document.getElementById("age").value = '';
                        document.getElementById("del").style.display='inline';
                    }

                }
            }
            function delting() {
                let box = document.getElementById("box");
                while (box.firstChild) {
                    box.removeChild(box.firstChild);
                }
                document.getElementById("datanotfound").style.display = 'block';
                document.getElementById("box").style.display = 'none';
                document.getElementById("del").style.display = 'none';
            }