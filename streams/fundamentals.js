// Stream => Conseguir obter pequenas partes de algum recurso e já poder trabalhar com aquele dado mesmo sem ler o arquivo por completo.

// Ex: Importação de clientes via CSV (Excel) => POST /upload import.csv (1GB de arquivo), então vamos lendo por exemplo 10MB de arquivo e já processando aos poucos enquanto ocorre ainda o upload simultaneamente. 

// Principais tipos de streams no Node => Readable, Writable, Transform e Duplex (Readable & Writable em uma só stream)

// process.stdin
//   .pipe(process.stdout)

import { Readable, Writable, Transform } from 'node:stream'

class OneToHundredStream extends Readable {
  index = 1

  _read() {
    const i = this.index++

    setTimeout(() => {
      if(i > 100) {
        this.push(null)
      } else {
        const buf = Buffer.from(String(i))
  
        this.push(buf)
      }
    }, 1000)
  }
}

class InverseNumberStream extends Transform {
  _transform(chunk, enconding, callback) {
    const transformed = Number(chunk.toString()) * -1

    callback(null, Buffer.from(String(transformed)))
  }
}

class MultiplyByTenStream extends Writable {
  _write(chunk, enconding, callback) {
    console.log(Number(chunk.toString()) * 10)
    callback()
  }
}

new OneToHundredStream()
  .pipe(new InverseNumberStream()) 
  .pipe(new MultiplyByTenStream())