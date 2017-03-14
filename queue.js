function Queue(){
  this.nombres = Array.prototype.slice.call(arguments,0);
  this.enqueue= enqueue;
  this.dequeue = dequeue;
  this.empty = empty;
  this.print = print;

  function enqueue(elemento){
    this.nombres.push(elemento);
  };
  function dequeue(){
    return this.nombres.shift();
  };
  function empty(){
    return this.nombres.length == 0;
  };
  function print(elemento){
    return document.write(this.nombres)
  };
}
var nombre = new Queue();
 nombre.enqueue("Mireya");
 nombre.enqueue("Miguel");
 nombre.enqueue("Lucia");
 nombre.enqueue("Lorena");
 nombre.enqueue("Cristina")
//console.log(this.nombre.dequeue());
var apellidos = new Queue();
 apellidos.enqueue("Martinez");
 apellidos.enqueue("Rodriguez");
 apellidos.enqueue("Gonzalez");
 apellidos.enqueue("Ramirez");
 apellidos.enqueue("Salas");
 var nombres=[];
 nombres.push(this.nombre.dequeue()+" "+this.apellidos.dequeue());
 nombres.push(this.nombre.dequeue()+" "+this.apellidos.dequeue());
 nombres.push(this.nombre.dequeue()+" "+this.apellidos.dequeue());
 nombres.push(this.nombre.dequeue()+" "+this.apellidos.dequeue());
 nombres.push(this.nombre.dequeue()+" "+this.apellidos.dequeue());
document.write(nombres);
