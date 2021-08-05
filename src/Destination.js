class Destination {
  constructor(destinationsData) {
    this.destinations = destinationsData;
  }
  findDestination(id) {
    return this.destinations.find((destination) => destination.id === id);
  }
}
export default Destination;
