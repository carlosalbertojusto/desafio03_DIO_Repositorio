/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react"
import { ItemContainer, ImgContainer } from "./styles"

function ItemRepo({ repo, handleRemoveRepo }) {
  const handleRemove = () => {
    handleRemoveRepo(repo.id)
  }

  return (
    <ItemContainer onClick={handleRemove}>
      <img src={repo.owner.avatar_url} alt="imagem do dono do repositório" />
      <h3>{repo.name}</h3>
      <p>{repo.full_name}</p>
      <a href={repo.html_url} target="_blank" rel="noreferrer">
        Ver repositório
      </a>
      <br />
      <a href="#" className="remover">
        Remover
      </a>
      <hr />
    </ItemContainer>
  )
}

export default ItemRepo
