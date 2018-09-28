import React from "react";
import ReactTable from "react-table";

export default (props) => {
  return (
    <ReactTable
      manual
      previousText='Anterior'
      nextText='Próximo'
      loadingText='Carregando...'
      noDataText={false}
      pageText='Pagina'
      ofText='de'
      rowsText='registros'
      showPageSizeOptions={false}
      defaultPageSize={0}
      sortable={false}
      className="-striped -highlight"
      {...props}
    />
  )
}