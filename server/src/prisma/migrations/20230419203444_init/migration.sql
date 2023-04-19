-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "uname" TEXT NOT NULL,
    "email" TEXT,
    "mobnr" TEXT,
    "psw" TEXT NOT NULL,
    "img" TEXT,
    "locked" BIGINT,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "logs" (
    "id" SERIAL NOT NULL,
    "method" TEXT NOT NULL,
    "message" TEXT,
    "located" TEXT NOT NULL,
    "time" TEXT NOT NULL,

    CONSTRAINT "logs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "errors" (
    "id" SERIAL NOT NULL,
    "errorId" INTEGER NOT NULL,
    "method" TEXT NOT NULL,
    "message" TEXT,
    "located" TEXT NOT NULL,
    "time" TEXT NOT NULL,

    CONSTRAINT "errors_pkey" PRIMARY KEY ("id")
);
