require('dotenv').config();

const express = require('express');
const app     = express();
const port    = process.env.PORT || 3000


const { Client } = require("@elastic/elasticsearch")
const esClient = new Client({
    node: process.env.URL
  , auth: { apiKey: process.env.TOKEN }
});


app.get('/map', async (req, res) => {
  try {
    const index = process.env.INDEX;
    const body = await esClient.search({
        index
      , body : {
          size: 0
        , aggs: {
            relatores_unicos: {
              terms: { field: "relator.keyword", size: 1000 }
            }
          }
        }
    });

    // Criando um array com somente os nomes dos relatores
    const relatores = body.aggregations.relatores_unicos.buckets.map((bucket) => bucket.key);

    // Retornando o resultado
    res.json({ relatores });
    
  } catch (error) {
    res.status(500).json({ error })
  }
});

app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}`));