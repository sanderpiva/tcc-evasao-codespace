import { useState } from 'react'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";


function Form() {
    const [idade18_25, setIdade18_25] = useState("");
    const [sexoMas, setSexoMas] = useState("");
    const [etniaBca, setEtniaBca] = useState("");
    const [necessidadeAux, setNecessidadeAux] = useState("");
    const [iraMaiorIgual6, setIRAMaiorIgual6] = useState("");
    const [ingressoAmpla, setIngressoAmpla] = useState("");
    const [origemEscolaParticular, setOrigemEscolaParticular] = useState("");
    const [result, setResult] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case "idade18_25":
                setIdade18_25(value);
                break;
            case "sexoMas":
                setSexoMas(value);
                break;
            case "etniaBca":
                setEtniaBca(value);
                break;
            case "necessidadeAux":
                setNecessidadeAux(value);
                break;
            case "iraMaiorIgual6":
                setIRAMaiorIgual6(value);
                break;
            case "ingressoAmpla":
                setIngressoAmpla(value);
                break;
            case "origemEscolaParticular":
                setOrigemEscolaParticular(value);
                break;            
                
            default:
            break;
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (
            idade18_25 === "" || 
            sexoMas === "" || 
            etniaBca === "" || 
            necessidadeAux === "" || 
            iraMaiorIgual6 === "" || 
            ingressoAmpla === "" || 
            origemEscolaParticular === ""
        ) {
            alert("Por favor, preencha todos os campos antes de enviar.");
            return; 
        }
        
        try { 
            const response = await axios.post("https://supreme-enigma-7xg49pjxpw4h4qr-5000.app.github.dev/api", {
                idade18_25: parseFloat(idade18_25),
                sexoMas: parseFloat(sexoMas),
                etniaBca: parseFloat(etniaBca),
                necessidadeAux: parseFloat(necessidadeAux),
                iraMaiorIgual6: parseFloat(iraMaiorIgual6),
                ingressoAmpla: parseFloat(ingressoAmpla),
                origemEscolaParticular: parseFloat(origemEscolaParticular)
            });
            setResult(response.data);
        } catch (error) {
            console.error("Erro ao enviar a solicitação:", error);
        }
    };

    const clearForm = () => {
        setIdade18_25("");
        setSexoMas("");
        setEtniaBca("");
        setNecessidadeAux("");
        setIRAMaiorIgual6("");
        setIngressoAmpla("");
        setOrigemEscolaParticular("");
        setResult("")
    };

    return (
        <div className="container mt-5">
            <h1 className="mb-4 d-flex align-items-center">
                Sistema Predição Evasão BSI: IFSULDEMINAS Machado MG 
            </h1>
            <form onSubmit={handleSubmit} className="p-4">
                <div className="mb-3">
                    <div className="radio-container">
                        <label htmlFor="idade18_25" className="form-label">Idade entre 18 - 25 anos?</label>
                    
                        <label>
                            <input
                                type="radio"
                                name="idade18_25"
                                value="1"
                                checked={idade18_25 === "1"}
                                required
                                onChange={handleChange}
                            /> Sim
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="idade18_25"
                                value="0"
                                checked={idade18_25 === "0"}
                                required
                                onChange={handleChange}
                            /> Nao
                        </label>
                    </div>
                </div>
                <div className="mb-3">
                    <div className="radio-container">
                        <label htmlFor="sexoMas" className="form-label">Sexo Masculino? </label>
                    
                        <label>
                            <input
                                type="radio"
                                name="sexoMas"
                                value="1"
                                checked={sexoMas === "1"}
                                required
                                onChange={handleChange}
                            /> Sim
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="sexoMas"
                                value="0"
                                checked={sexoMas === "0"}
                                required
                                onChange={handleChange}
                            /> Nao
                        </label>
                    </div>
                </div>
                <div className="mb-3">
                    <div className="radio-container">
                        <label htmlFor="etniaBca" className="form-label">Etnia branca? </label>
                    
                        <label>
                            <input
                                type="radio"
                                name="etniaBca"
                                value="1"
                                checked={etniaBca === "1"}
                                required
                                onChange={handleChange}
                            /> Sim
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="etniaBca"
                                value="0"
                                checked={etniaBca === "0"}
                                required
                                onChange={handleChange}
                            /> Nao
                        </label>
                    </div>
                </div>
                <div className="mb-3">
                    <div className="radio-container">
                        <label htmlFor="necessidadeAux" className="form-label">Necessidade de auxilio? </label>
                    
                        <label>
                            <input
                                type="radio"
                                name="necessidadeAux"
                                value="1"
                                checked={necessidadeAux === "1"}
                                required
                                onChange={handleChange}
                            /> Sim
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="necessidadeAux"
                                value="0"
                                checked={necessidadeAux === "0"}
                                required
                                onChange={handleChange}
                            /> Nao
                        </label>
                    </div>
                </div>
                
                <div className="mb-3">
                    <div className="radio-container">
                        <label htmlFor="iraMaiorIgual6" className="form-label">I.R.A. maior igual 6? </label>
                    
                        <label>
                            <input
                                type="radio"
                                name="iraMaiorIgual6"
                                value="1"
                                checked={iraMaiorIgual6 === "1"}
                                required
                                onChange={handleChange}
                            /> Sim
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="iraMaiorIgual6"
                                value="0"
                                checked={iraMaiorIgual6 === "0"}
                                required
                                onChange={handleChange}
                            /> Nao
                        </label>
                    </div>
                </div>

                
                <div className="mb-3">
                    <div className="radio-container">
                        <label htmlFor="ingressoAmpla" className="form-label">Ingresso Ampla concorrência? </label>
                    
                        <label>
                            <input
                                type="radio"
                                name="ingressoAmpla"
                                value="1"
                                checked={ingressoAmpla === "1"}
                                required
                                onChange={handleChange}
                            /> Sim
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="ingressoAmpla"
                                value="0"
                                checked={ingressoAmpla === "0"}
                                required
                                onChange={handleChange}
                            /> Nao
                        </label>
                    </div>
                </div>

                
                <div className="mb-3">
                    <div className="radio-container">
                        <label htmlFor="origemEscolaParticular" className="form-label">Origem escola privada? </label>
                    
                        <label>
                            <input
                                type="radio"
                                name="origemEscolaParticular"
                                value="1"
                                checked={origemEscolaParticular === "1"}
                                required
                                onChange={handleChange}
                            /> Sim
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="origemEscolaParticular"
                                value="0"
                                checked={origemEscolaParticular === "0"}
                                required
                                onChange={handleChange}
                            /> Nao
                        </label>
                    </div>
                </div>

                
                <button type="submit"  id="btn" className="btn btn-primary">Enviar</button>
                <button type="button" id="clearButton"  className="btn btn-secondary" onClick={clearForm}>Limpar</button>
            </form>

            {result && (
                <div className="card-body">
                    <h2>Resultado da Predição</h2>
                    <p className="alert alert-primary">{result}</p>
                </div>
            )}
        </div>
    );
}

export default Form;