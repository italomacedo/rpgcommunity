function RPGCommunityModel(id, meta_name, meta_display, fields) {
    this.id = id;
    this.meta_name = meta_name;
    this.meta_display = meta_display;
    this.fields = fields;

    this.toJSON = () => {
        let result = {};

        result["id"] = id;

        this.fields.map(field => {
            result[field.id] = field.value;
        });

        return result;
    }
}

export default RPGCommunityModel;