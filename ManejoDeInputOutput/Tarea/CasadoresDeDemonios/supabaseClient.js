import postgres from 'postgres'

const connectionString = "postgresql://postgres:guchapa9905!@db.oqybylarzcyzkspyuslt.supabase.co:5432/postgres"
const sql = postgres(connectionString)

export default sql