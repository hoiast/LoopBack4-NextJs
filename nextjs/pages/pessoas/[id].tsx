import type { GetServerSideProps, NextPage } from 'next'
import { pessoaService } from 'services'
import type { Pessoa } from 'types'
import Link from 'next/link';

interface Props {
    pessoa: Pessoa;
  }


const Ver: NextPage<Props> = ({pessoa}) => {

    const dataNascimento = new Date(pessoa.dataNascimento).toLocaleDateString()

    return (
      <div className="container">
        <h3>
          <Link href={`/`}>
            <a className="waves-effect waves-light btn">
              <i className="material-icons small">arrow_back</i>
            </a>
          </Link>
        </h3>
        <table className="striped">
          <tbody>
            <tr>
              <td>ID</td>
              <td>{pessoa.id}</td>
            </tr>
            <tr>
              <td>Nome</td>
              <td>{pessoa.nome}</td>
            </tr>
            <tr>
              <td>Data de Nascimento</td>
              <td>{dataNascimento}</td>
            </tr>
            <tr>
              <td>CPF</td>
              <td>{pessoa.cpf}</td>
            </tr>
            <tr>
              <td>Profissao</td>
              <td>{pessoa.profissao?.nome}</td>
            </tr>
            <tr>
              <td>Telefone</td>
              <td>{pessoa.telefone}</td>
            </tr>
            <tr>
              <td>Observações</td>
              <td>{pessoa.observacoes}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
}
export default Ver

export const getServerSideProps : GetServerSideProps = async ({ params }) => {
    const pessoa = params?.id && typeof params.id === 'string' ? await pessoaService.getById(parseInt(params?.id)): null;
    return {
        props: { pessoa }
    }
}