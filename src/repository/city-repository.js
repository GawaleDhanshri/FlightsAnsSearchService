const { City } = require('../models/index');

class CityRepository {
    async createCity({ name }){
        try {
            const city = await City.create({ name});
            return city;
        } catch (error) {
            console.log("Something went wrong in the repository leyer");
            throw {error};
        }

    }

    async deleteCity(cityId) { 
        try {
            await City.destroy({
                where: {
                    id: cityID
                }
            });
            return true;
        } catch (error) {
            console.log("Something went wrong in the repository leyer");
            throw {error};
        }
    }

    async updateCity(cityId, data) {
        try {
            const city = await City.update(data, {
                where: {
                    id: cityId
                }
            });
            return city;
        } catch (error) {
            console.log("Something went wrong in the repository leyer");
            throw {error};
        }

    }

    async getCity(cityId) {
        try {
            const city = await City.findByPK(cityId);
            return city;
        } catch (error) {
            console.log("Something went wrong in the repository leyer");
            throw {error};
        }
    }
}

module.exports = CityRepository;