const Storage = function() {
  
    this.city;
    this.defaultCity = "London";
  }

 Storage.prototype.getLocationData = function() {
    if (localStorage.getItem("city") === null) {
      this.city = this.defaultCity;
    } else {
      this.city = localStorage.getItem("city");
    }
    return {
      city: this.city,
    };
  }

  Storage.prototype.setLocationData = function(city) {
    localStorage.setItem("city", city);
    // localStorage.setItem("city", this.defaultCity);
  }

