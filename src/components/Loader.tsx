
type Props = {
    isLoading: boolean;
}

export const Loader = ({ isLoading = false }: Props) => {
    return (
        isLoading ?
            <div className="loader-container">
                <span className="loader"></span>
            </div> 
        : null
    );
}
