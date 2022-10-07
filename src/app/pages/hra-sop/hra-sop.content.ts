import { PageHeaderItems } from "src/app/components/page-header/page-header-items";
import { HeaderData } from "src/app/components/table/header";
import { TableData } from "src/app/components/table/table";

export const pageHeader:PageHeaderItems[] = [
    {
        image: 'assets/images/hra-sop.png',
        title: 'Human Reference Atlas Standard Operating Procedures',
        subtitle: 'Standard operating procedures for Human Reference Atlas construction, visualization, and usage'
    }
]

export const headerInfo: HeaderData[] = [
    {
      columnDef: 'title',
      header: 'Title',
      cell: (element: TableData) => `${element['title']}`
    },
    {
      columnDef: 'doi',
      header: 'Persistent DOI',
      cell: (element: TableData) => `<a href="${element['url'] || 'TODO:Please add a url column to this .csv!'}">${element['doi']}`
    },
    {
      columnDef: 'version',
      header: 'Version',
      cell: (element: TableData) => `${element['version']}`
    }
]

export const displayedColumnsData = headerInfo.map(h => h.columnDef);