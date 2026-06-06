import numpy as np
from flask import Flask, jsonify, request
from flask_cors import CORS
import pickle

app = Flask(__name__)
# Permitir CORS para todas as origens e métodos, incluindo OPTIONS
CORS(app, resources={r"/api": {"origins": "*"}})

model = pickle.load(open("model.pkl", "rb"))

# A rota /api já recebe o JSON, isso está correto!
@app.route("/api", methods=["POST", "OPTIONS"])
def results():
    if request.method == "OPTIONS":
        # Isso responde ao "pré-vôo" do navegador com sucesso
        return '', 200
        
    data = request.get_json(force=True)
    # Certifique-se de que a ordem dos valores no data é a mesma do modelo
    pred = model.predict([np.array(list(data.values()))])
    output = ("NAO EVADE" if pred[0] == 0 else "EVADE")
    return jsonify(output)

if __name__ == '__main__':
    # Obrigatório para o Codespaces enxergar a porta
    app.run(host='0.0.0.0', port=5000, debug=True)