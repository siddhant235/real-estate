import DropDownMenu from "@/components/atoms/dropdown"
import SearchInputView from "../../search-bar-view"

const SearchFilterView = () => {
    return (
        <div className="flex h-[50px] flex w-[80%] justify-around mx-auto">
            <DropDownMenu />
            <SearchInputView />
            <button className="bg-[#126BFB] w-[100px] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded h-[40px]">
                Submit
            </button>
        </div>
    )
}

export default SearchFilterView