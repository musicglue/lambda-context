export default class Context {
  constructor() {
    this.clientContext = null;
    this.functionName = null;
    this.functionVersion = null;
    this.invokedFunctionArn = null;
    this.memoryLimitInMB = null;
    this.awsRequestId = null;
    this.logGroupName = null;
    this.logStreamName = null;
  }

  succeed(response) {

  }

  fail(response) {

  }

  done(error, result) {

  }

  getRemainingTimeInMillis() {

  }
}
