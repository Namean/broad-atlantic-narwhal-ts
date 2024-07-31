const { PORT } = process.env;
export const listener = app.listen(PORT, function () {
    const addressString = listener.address();
});
