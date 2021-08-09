class Destination {
  constructor(destinationsData) {
    this.destinations = destinationsData.destinations;
  }
  findDestination(id) {
    return this.destinations.find((destination) => destination.id === id);
  }
}
export default Destination;
