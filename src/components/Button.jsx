export function Button(props) {
    return(
        <button {...props} className="bg-slate-400 hover:bg-slate-500 cursor-pointer text-white p-2 rounded-md">
            {props.children}
        </button>
    )
}