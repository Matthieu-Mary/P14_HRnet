type Props = {}

function SearchBar({}: Props) {
    const handleSearch = (e: any) => {
        console.log(e.target.value)
    }
  return (
    <div className="search">
        <span>Recherche:</span>
        <input type="text" onInput={ (e) => handleSearch(e)}/>
    </div>
  )
}

export default SearchBar