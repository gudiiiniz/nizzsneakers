function validateForm(event){
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();
    const brand = document.getElementById("brand").value.trim();
    const shoesModel = document.getElementById("shoes-model").value.trim();
    const shoesSize = document.getElementById("shoes-size").value.trim();
    const sizePattern = document.querySelector("input[name='inputUnit']:checked").value;
    const shoesCondition = document.getElementById("shoe-condition").value;
    const state = document.getElementById("state").value;
    const comments = document.getElementById("comments").value.trim();

    if(phone.length < 9){
        alert("Telefone Invalido!");
        return;
    }

    if(shoesSize < 30 || shoesSize > 50){
        alert("O tamanho especificado deve estar entre 30 e 50.");
        return;
    }

    if(state === ""){
        alert("Selecione um estado.");
        return;
    }

    showInfo({
        name,
        phone,
        email,
        brand,
        shoesModel,
        shoesSize,
        sizePattern,
        shoesCondition,
        state,
        comments
    });
}

function showInfo(data){
    alert(
        "Dados Enviados: \n\n" +
        `Nome: ${data.name}\n` +
        `Telefone: ${data.phone}\n` +
        `Email: ${data.email}\n` +
        `Marca: ${data.brand}\n` +
        `Modelo: ${data.shoesModel}\n` +
        `Tamanho: ${data.shoesSize}\n` +
        `Condição: ${data.shoesCondition}\n` +
        `Estado: ${data.state}\n` +
        `Observações: ${data.comments}`
    );
}

document.getElementById("requestForm").addEventListener("submit", validateForm)

function loadTable() {
    fetch("../content/table.json")
        .then(response => {
            if (!response.ok) {
                throw new Error("Erro ao carregar JSON");
            }
            return response.json();
        })
        .then(data => {
            const tbody = document.getElementById("size-table");
            tbody.innerHTML = "";

            data.forEach(item => {
                const row = document.createElement("tr");
                row.innerHTML = `
                    <td>${item.br}</td>
                    <td>${item.eur}</td>
                `;
                tbody.appendChild(row);
            });
        })
        .catch(error => console.error("Erro:", error));
}

document.addEventListener("DOMContentLoaded", loadTable);