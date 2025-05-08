document.addEventListener('DOMContentLoaded', function() {
    // Seleccionar todas las tarjetas de educación
    const tarjetas = document.querySelectorAll('.tarjeta-ed');
    
    tarjetas.forEach(tarjeta => {
        // Agregar evento click a cada tarjeta
        tarjeta.addEventListener('click', function() {
            // Encontrar el elemento sobre-ed siguiente
            const sobreEd = this.nextElementSibling;
            
            // Cerrar otros elementos abiertos primero 
            if (!sobreEd.classList.contains('activo')) {
                cerrarTodosLosSobreEd();
            }
            
            // Alternar la clase 'activo' en el sobre-ed
            sobreEd.classList.toggle('activo');
        });
    });
    
    // Función para cerrar todos los elementos sobre-ed 
    function cerrarTodosLosSobreEd() {
        document.querySelectorAll('.sobre-ed.activo').forEach(abierto => {
            abierto.classList.remove('activo');
        });
    }
});