interface Cardprops {
    carta: React.ReactNode;
}

export function Card(props: Cardprops) {
    const { carta } = props;

    return (
        <>
            <div style={{ border: "1px solid #ccc", padding: "12px", borderRadius: "8px" }}>
                {carta}
            </div>
        </>
    );
}
