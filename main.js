document.addEventListener('DOMContentLoaded', () => {
  const mascotasList = document.getElementById('mascotas-list');

  fetch('http://localhost:3000/api/mascotas_mascota') // Cambia esto por tu URL real
    .then(response => response.json())
    .then(data => {
      mascotasList.innerHTML = ''; // Limpia contenido anterior

      data.forEach(mascota => {
        const item = document.createElement('li');
        item.innerHTML = `
          <h2>${mascota.nombre_masc}</h2>
          <img src="${mascota.foto_masc}" alt="${mascota.nombre}" />
          <p class="mascota-descripcion">${mascota.descripcion}</p>
          <p class="mascota-edad">${mascota.edad_masc} Años</p>
          <button class="button" onclick="location.href='${mascota.formulario}'">
          <a href="https://forms.gle/MYHNumkHbHo8zh6t6" style="color: black; text-decoration: none;">Quiero adoptar</a>


            `;
        mascotasList.appendChild(item);
      });
    })
    .catch(error => {
      console.error('Error al cargar las mascotas:', error);
    });
});