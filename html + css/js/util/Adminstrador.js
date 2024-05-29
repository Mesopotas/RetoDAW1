document.addEventListener("DOMContentLoaded", () => {
    AdminUser();
});

async function AdminUser(category) {
    let items;
    if (category === undefined) {
        items = await fetch("http://localhost:8080/RetoDAW1ModeloAnton/Controller?ACTION=CLIENT.SQL_FIND_ALL");
    }
    const itemsJson = await items.json();
    const tableBody = document.getElementById("table-body");
    tableBody.innerHTML = '';
    console.log(itemsJson);

    for (const item of itemsJson) {
        console.log(item);

        const row = document.createElement("tr");

        const idCell = document.createElement("td");
        idCell.textContent = item.Id_cliente;
        row.appendChild(idCell);

        const userCell = document.createElement("td");
        userCell.textContent = item.Usuario;
        row.appendChild(userCell);

        const passwordCell = document.createElement("td");
        passwordCell.textContent = item.Contrasena;
        row.appendChild(passwordCell);

        tableBody.appendChild(row);
    }
    
    const deleteClient = async (Id_cliente) => {
        const url = `http://localhost:8080/RetoDAW1ModeloAnton/Controller?ACTION=CLIENT.DELETE&ID_CLIENTE=${Id_cliente}`;
        try {
            const response = await fetch(url, { method: 'DELETE' });
            if (response.ok) {
                alert('Cliente eliminado exitosamente.');
                // Volver a cargar la lista de clientes después de eliminar uno
                AdminUser();
            } else {
                throw new Error('Error al eliminar cliente.');
            }
        } catch (error) {
            console.error('Error al eliminar cliente:', error);
        }
    };
    
    const deleteButton = document.getElementById('deleteButton');
    deleteButton.addEventListener('click', () => {
        const Id_cliente = prompt('Ingrese el ID del cliente que desea eliminar:');
        if (Id_cliente !== null && Id_cliente.trim() !== '') {
            deleteClient(Id_cliente);
        } else {
            alert('Debe ingresar un ID válido.');
        }
    });
/*



    const crearUsuario = async () => {
        const user_id = document.getElementById('user_id').value;
        const nombre = document.getElementById('nombre').value;
        const contrasena = document.getElementById('contrasena').value;

        const data = {
            ID_CLIENTE: user_id,
            USUARIO: nombre,
            CONTRASENA: contrasena,
        };

        const url = `http://localhost:8080/RetoDAW1ModeloAnton/Controller?ACTION=CLIENT.ADD&ID_CLIENTE=${user_id}&USUARIO=${nombre}&CONTRASENA=${contrasena}`;

        try {
            const response = await fetch(url, {
                method: 'POST', mode: 'no-cors',

                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const nuevoUser = data;
            console.log('Nuevo Usuario creado:', nuevoUser);

            document.getElementById('user_id').value = '';
            document.getElementById('nombre').value = '';
            document.getElementById('contrasena').value = '';

            // Crear la nueva fila en la tabla con el nuevo producto
            createUsuario(nuevoUser);
        } catch (error) {
            console.error('Error al crear producto:', error);
        }
    };
    
    document.getElementById('btn-add').addEventListener('click', crearUsuario);






const crearUsuario = async () => {
    const user_id = document.getElementById('user_id').value;
    const nombre = document.getElementById('nombre').value;
    const contrasena = document.getElementById('contrasena').value;

    const data = {
        ID_CLIENTE: user_id,
        USUARIO: nombre,
        CONTRASENA: contrasena,
    };

    const url = `http://localhost:8080/RetoDAW1ModeloAnton/Controller?ACTION=CLIENT.ADD&ID_CLIENTE=${user_id}&USUARIO=${nombre}&CONTRASENA=${contrasena}`;

    try {
        const response = await fetch(url, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const text = await response.text(); // Obtener la respuesta como texto
        let nuevoUser;
        try {
            nuevoUser = JSON.parse(text); // Intentar convertir la respuesta a JSON
        } catch (error) {
            console.error('Error al parsear la respuesta JSON:', error);
            console.log('Respuesta del servidor:', text);
            return; // Salir de la función si la respuesta no es JSON válido
        }

        console.log('Nuevo Usuario creado:', nuevoUser);

        document.getElementById('user_id').value = '';
        document.getElementById('nombre').value = '';
        document.getElementById('contrasena').value = '';

        // Crear la nueva fila en la tabla con el nuevo producto
        createUsuario(nuevoUser);
    } catch (error) {
        console.error('Error al crear producto:', error);
    }
};

document.getElementById('btn-add').addEventListener('click', crearUsuario);

*/

const addClient = async (user_id, nombre, contrasena) => {
    console.log(user_id)
    console.log(nombre)
    console.log(contrasena)
    const url = `http://localhost:8080/RetoDAW1ModeloAnton/Controller?ACTION=CLIENT.ADD&ID_CLIENTE=${user_id}&USUARIO=${nombre}&CONTRASENA=${contrasena}`;
//    `http://localhost:8080/RetoDAW1ModeloAnton/Controller?ACTION=CLIENT.ADD&ID_CLIENTE=1&USUARIO=1&CONTRASENA=1`
//    `http://localhost:8080/Xeneburguer/Controller?ACTION=CLIENTES.ADD&ID_CLIENTE=${clientId}&NOMBRE=${clientName}&EMAIL=${clientEmail}&CONTRASENA=${clientPassword}&TELEFONO=${clientPhone}`
    try {
        const response = await fetch(url, { method: 'GET' });
        if (response.ok) {
            alert('Cliente añadido exitosamente.');
        } else {
            throw new Error('Error al añadir cliente.');
        }
    } catch (error) {
        console.error('Error al añadir cliente:', error);
    }
};
const addButton = document.getElementById('addButtom');
addButton.addEventListener('click', () => {
    const user_id = prompt('Ingrese el ID del cliente:');
    const nombre = prompt('Ingrese el nombre del cliente:');
    const contrasena = prompt('Ingrese la contraseña del cliente:');
    if ( user_id !== null && nombre !== null && contrasena !== null && contrasena.trim()) {
        addClient(user_id, nombre, contrasena);
    } else {
        alert('Debe ingresar todos los campos.');
    }
});


/*
const addClient = async (user_id,nombre,contrasena) => {
    const url = `http://localhost:8080/RetoDAW1ModeloAnton/Controller?ACTION=CLIENT.ADD&ID_CLIENTE=${user_id}&USUARIO=${nombre}&CONTRASENA=${contrasena}`;
    try {
        const response = await fetch(url, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        if (response.ok) {
            alert('Cliente eliminado exitosamente.');
            // Volver a cargar la lista de clientes después de eliminar uno
            AdminUserAdd();
        } else {
            throw new Error('Error al crear cliente.');
        }
    } catch (error) {
        console.error('Error al crear cliente:', error);
    }
};

const addbuttom = document.getElementById('addButtom');
addbuttom.addEventListener('click', () => {
    const user_id = prompt('Ingrese el ID del cliente que desea crear:');
    if (user_id !== null && user_id.trim() !== '') {
        addClient(user_id);
    } else {
        alert('Debe ingresar un ID válido.');
    }
});

*/



}
