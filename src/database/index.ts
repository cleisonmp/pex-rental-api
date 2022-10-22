import { createConnection, getConnectionOptions } from 'typeorm'

interface OptionsProps {
  host: string
}

getConnectionOptions().then((options) => {
  const newOptions = options as OptionsProps //override host readonly
  newOptions.host = 'database' //Essa opção deverá ser EXATAMENTE o nome dado ao service do banco de dados
  createConnection({
    ...options,
  })
})
