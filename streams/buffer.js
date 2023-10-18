const buf = Buffer.from("hello")

// Representação do dado em hexadecimal
console.log(buf) // Saída: <Buffer 68 65 6c 6c 6f>

// Representação do dado em decimal
console.log(buf.toJSON()) // Saída: { type: 'Buffer', data: [ 104, 101, 108, 108, 111 ] }