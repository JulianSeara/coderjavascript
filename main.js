// Define la variable nombre
var nombre = "Julian";


function calcularTotal(celdaId, cantidadId, resultadoId) {
    var celda = document.getElementById(celdaId);
    var cantidad = document.getElementById(cantidadId);
    var resultado = document.getElementById(resultadoId);

    resultado.value = (parseFloat(celda.value) * parseFloat(cantidad.value)) || 0;
}

function actualizarCelda1() {
    var tecnologia = document.getElementById('tecnologia').value.toLowerCase();
    var celda1 = document.getElementById('celda1');
    var celda3 = document.getElementById('celda3');
    var celda31 = document.getElementById('celda31');/*Nuevo*/
    var celda7 = document.getElementById('celda7');
    var celda71 = document.getElementById('celda71');
    var celda9 = document.getElementById('celda9');
    var celda91 = document.getElementById('celda91');/*Nuevo*/
    var celda92 = document.getElementById('celda92');/*Nuevo*/
    var celda11 = document.getElementById('celda11');
    var celda13 = document.getElementById('celda13');
    var celda15 = document.getElementById('celda15');
    var celda171 = document.getElementById('celda171');
    var celda17 = document.getElementById('celda17');
    // Establece el valor en la celda1 en función de la tecnología seleccionada
    if (tecnologia === 'advanced') {
      
        celda1.value = 67250;  //Acceso Simultáneo FULL (Gestión Integral)	
        celda3.value = 58438;  //Acceso Simultáneo POS (Punto de Ventas)	
        celda31.value = 30000;  //Acceso Simultáneo POS (Android)	/**Nuevo */
        celda7.value = 36988;  //Acceso Simultáneo VND (Vendor)	
        celda71.value = 50438;   //Acceso Simultáneo POP (Punto de Compras)	
        celda9.value = 36988;   //Acceso Simultáneo WHW (Almacén)	
        celda91.value = 8001;   //Acceso Simultáneo WHW (Almacén)/**Nuevo */	
        celda92.value = 8005;   //Acceso Simultáneo WHW (Almacén)/**Nuevo */	
        celda11.value = 23538; //Acceso Simultáneo TCP (Precios/Stock)
        celda13.value = 50438;   //Acceso Virtual AMH (Markethub)*	
        celda15.value = 67250;  //Acceso Virtual AEC (Ecommerce)**	
        celda171.value = 67250; //Acceso Virtual AVM (Multiempresa)		
        celda17.value = 67250;   //Acceso Virtual AVF (Franquicia)	


    } else if (tecnologia === 'advanced') {
        celda1.value = 0;
        celda3.value = 0;
    } else {
// Establece algún otro valor predeterminado o lógica para otras tecnologías
        celda1.value = 0;
    }
    // Establece el valor en la tecnología Premium
if (tecnologia === 'premium') {
        celda1.value = 100875;  //Acceso Simultáneo FULL (Gestión Integral)	
        celda3.value = 75656;  //Acceso Simultáneo POS (Punto de Ventas)	
        celda31.value = 30000;  //Acceso Simultáneo POS (Punto de Ventas) Nuevo	
        celda7.value = 55481;  //Acceso Simultáneo VND (Vendor)	
        celda71.value = 75656;   //Acceso Simultáneo POP (Punto de Compras)	
        celda9.value = 55481;   //Acceso Simultáneo WHW (Almacén)	
        celda91.value = 1995;   //Acceso Simultáneo WHW (Almacén) Nuevo	
        celda92.value = 1998;   //Acceso Simultáneo WHW (Almacén) Nuevo	
        celda11.value = 35306; //Acceso Simultáneo TCP (Precios/Stock)
        celda13.value = 75656;   //Acceso Virtual AMH (Markethub)*	
        celda15.value = 100875;  //Acceso Virtual AEC (Ecommerce)**	
        celda171.value = 100875; //Acceso Virtual AVM (Multiempresa)		
        celda17.value = 100875;   //Acceso Virtual AVF (Franquicia)	

    } else if (tecnologia === 'premium') {
        celda1.value = 0;
        celda3.value = 0;
    } else {
        // Establece algún otro valor predeterminado o lógica para otras tecnologías
       
    }
// Establece el valor en la tecnología Express
if (tecnologia === 'express') {
        celda1.value = 40350;  //Acceso Simultáneo FULL (Gestión Integral)	
        celda3.value = 30263;  //Acceso Simultáneo POS (Punto de Ventas)	
        celda31.value = 30000;  //Acceso Simultáneo POS (Android nuevo)	
        celda7.value = 22193;  //Acceso Simultáneo VND (Vendor)	
        celda71.value = 30263;   //Acceso Simultáneo POP (Punto de Compras)	
        celda9.value = 22193;   //Acceso Simultáneo WHW (Almacén)	
        celda91.value = 2010;   //Acceso Simultáneo WHW (Almacén) Nuevo	
        celda92.value = 2015;   //Acceso Simultáneo WHW (Almacén) Nuevo	
        celda11.value = 14123; //Acceso Simultáneo TCP (Precios/Stock)
        celda13.value = 30263;   //Acceso Virtual AMH (Markethub)*	
        celda15.value = 40350;  //Acceso Virtual AEC (Ecommerce)**	
        celda171.value = 40350; //Acceso Virtual AVM (Multiempresa)		
        celda17.value = 40350;   //Acceso Virtual AVF (Franquicia)	

    } else if (tecnologia === 'express') {
        celda1.value = 0;
        celda3.value = 0;
    } else {
        // Establece algún otro valor predeterminado o lógica para otras tecnologías
       
    }
// Establece el valor en la tecnología Express
if (tecnologia === 'seleccionar') {
        celda1.value = "Seleccione Tecnología";
        celda3.value = "Seleccione Tecnología";
        celda31.value = "Seleccione Tecnología";
        celda7.value = "Seleccione Tecnología";
        celda71.value = "Seleccione Tecnología";
        celda9.value = "Seleccione Tecnología";
        celda91.value = "Seleccione Tecnología";
        celda92.value = "Seleccione Tecnología";
        celda11.value = "Seleccione Tecnología";
        celda13.value = "Seleccione Tecnología";
        celda15.value = "Seleccione Tecnología";
        celda171.value = "Seleccione Tecnología";
        celda17.value = "Seleccione Tecnología";
    } else if (tecnologia === 'seleccionar') {
        celda1.value = 0;
        celda3.value = 0;
    } else {
        // Establece algún otro valor predeterminado o lógica para otras tecnologías
       
    }
    // Llama a la función para calcular el total
    calcularTotal('celda1', 'celda2', 'resultado1');
}
</script>
<script> 
// Modifica la función buscar_datos() en tu script

function buscar_datos()
{
doc = $("#doc").val();


var parametros = 
{
  "buscar": "1",
  "doc" : doc
  
};
$.ajax(
{
  data:  parametros,
  dataType: 'json',
  url:   'codigos_php.php',
  type:  'post',
 beforeSend: function() 
 {alert("enviando");}, 
  error: function()
{alert("Error");},
  complete: function() 
 {alert("¡Listo!");},
  success:  function (valores) 
  {

    $("#nombre").val(valores.nombre);
    $("#dir").val(valores.direccion);
    $("#tel").val(valores.telefono);


}
}) 
}


</script>
<script>
// Lógica para calcular la suma de la columna Fee mensual y cantidad de accesos
$(document).ready(function() {
$('input[type="text"]').on('input', function() {
  calcularTotales();
});

function calcularTotales() {
  var totalCantidadAccesos = 0;
  var totalFeeMensual = 0;

  $('input[id^="celda"], input[id^="resultado"]').each(function() {
    var valor = parseFloat($(this).val()) || 0;

    if ($(this).attr('id').includes('celda2') || $(this).attr('id').includes('celda4') || $(this).attr('id').includes('celda8') || $(this).attr('id').includes('celda81') || $(this).attr('id').includes('celda10') || $(this).attr('id').includes('celda12') || $(this).attr('id').includes('celda14') || $(this).attr('id').includes('celda16') || $(this).attr('id').includes('celda181') || $(this).attr('id').includes('celda18')) {
      totalCantidadAccesos += valor;
    }

    if ($(this).attr('id').includes('resultado') && !isNaN(valor)) {
      totalFeeMensual += valor;
    }
  });

  $('#totalCantidadAccesos').text(  totalCantidadAccesos.toFixed(0));
  $('#totalFeeMensual').text('$' + totalFeeMensual.toFixed(0));
}
});
</script>
<script>
//formula multiplicacion conceptos y accesos//
function calcularTotal(idCelda1, idCelda2, idResultado) {
    var valorCelda1 = parseFloat(document.getElementById(idCelda1).value) || 0;
    var valorCelda2 = parseFloat(document.getElementById(idCelda2).value) || 0;
    var resultado = valorCelda1 * valorCelda2;
    document.getElementById(idResultado).value = resultado.toFixed(0);
}

</script>

</section>

<!-- Aquí finalizan los Script Formulas-->
